import { useRouter } from 'expo-router';
import { Accelerometer, Magnetometer } from 'expo-sensors';
import { useEffect, useRef, useState } from 'react';
import {
  Animated,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

export default function HomeScreen() {
  const router = useRouter();

  const [heading, setHeading] = useState(0);

  const rotateAnim = useRef(new Animated.Value(0)).current;
  const previousHeading = useRef(0);

  const acceleration = useRef({
    x: 0,
    y: 0,
    z: 0,
  });

  useEffect(() => {
    Accelerometer.setUpdateInterval(100);
    Magnetometer.setUpdateInterval(100);

    const accelerometerSubscription = Accelerometer.addListener((data) => {
      acceleration.current = data;
    });

    const magnetometerSubscription = Magnetometer.addListener((data) => {
      const { x: mx, y: my, z: mz } = data;
      const { x: ax, y: ay, z: az } = acceleration.current;

      /*
       * Calculate the magnitude of gravity.
       */
      const gravityMagnitude = Math.sqrt(
        ax * ax + ay * ay + az * az
      );

      if (gravityMagnitude === 0) {
        return;
      }

      /*
       * Normalize the gravity vector.
       */
      const gx = ax / gravityMagnitude;
      const gy = ay / gravityMagnitude;
      const gz = az / gravityMagnitude;

      /*
       * Remove the gravity component from
       * the magnetic field.
       */
      const dot = mx * gx + my * gy + mz * gz;

      const hx = mx - dot * gx;
      const hy = my - dot * gy;

      /*
       * Calculate heading.
       */
      let angle = Math.atan2(hy, hx) * (180 / Math.PI);

      /*
       * Correct the 90-degree offset found
       * during our phone testing.
       */
      angle = angle - 90;

      /*
       * Normalize heading to 0-360 degrees.
       */
      if (angle < 0) {
        angle += 360;
      }

      if (angle >= 360) {
        angle -= 360;
      }

      const newHeading = Math.round(angle);

      setHeading(newHeading);

      /*
       * Smooth needle rotation.
       * This also prevents the needle from
       * making a long rotation at 359° -> 0°.
       */
      let targetHeading = newHeading;

      const previous = previousHeading.current;
      const difference = targetHeading - previous;

      if (difference > 180) {
        targetHeading -= 360;
      } else if (difference < -180) {
        targetHeading += 360;
      }

      Animated.timing(rotateAnim, {
        toValue: targetHeading,
        duration: 120,
        useNativeDriver: true,
      }).start();

      previousHeading.current = targetHeading;
    });

    /*
     * Remove sensor listeners when the screen
     * is no longer being used.
     */
    return () => {
      accelerometerSubscription.remove();
      magnetometerSubscription.remove();
    };
  }, [rotateAnim]);

  /*
   * Convert degrees into a direction name.
   */
  const getDirection = (angle: number) => {
    if (angle >= 337.5 || angle < 22.5) {
      return 'NORTH';
    }

    if (angle < 67.5) {
      return 'NORTHEAST';
    }

    if (angle < 112.5) {
      return 'EAST';
    }

    if (angle < 157.5) {
      return 'SOUTHEAST';
    }

    if (angle < 202.5) {
      return 'SOUTH';
    }

    if (angle < 247.5) {
      return 'SOUTHWEST';
    }

    if (angle < 292.5) {
      return 'WEST';
    }

    return 'NORTHWEST';
  };

  /*
   * Convert heading value into an animated
   * rotation value for the needle.
   */
  const rotate = rotateAnim.interpolate({
    inputRange: [-360, 360],
    outputRange: ['-360deg', '360deg'],
    extrapolate: 'extend',
  });

  /*
   * Create one compass tick every 10 degrees.
   */
  const tickMarks = Array.from({ length: 36 }, (_, index) => {
    const degree = index * 10;

    /*
     * Every 30 degrees gets a larger tick.
     */
    const isMajor = degree % 30 === 0;

    return (
      <View
        key={degree}
        style={[
          styles.tick,
          {
            transform: [{ rotate: `${degree}deg` }],
          },
        ]}
      >
        <View
          style={[
            styles.tickLine,
            isMajor ? styles.majorTick : styles.minorTick,
          ]}
        />
      </View>
    );
  });

  return (
    <View style={styles.container}>

      {/* Settings button */}
      <TouchableOpacity
        style={styles.settingsButton}
        onPress={() => router.push('/settings')}
        activeOpacity={0.7}
      >
        <Text style={styles.settingsIcon}>⚙</Text>
      </TouchableOpacity>

      {/* App title */}
      <Text style={styles.title}>
        COMPASS
      </Text>

      {/* Small subtitle */}
      <Text style={styles.subtitle}>
        FIND YOUR DIRECTION
      </Text>

      {/* Compass wrapper */}
      <View style={styles.compassWrapper}>

        {/* Fixed heading pointer */}
        <View style={styles.fixedPointer}>
          <View style={styles.pointerTriangle} />
        </View>

        {/* Outer compass */}
        <View style={styles.compassOuter}>

          {/* Middle compass */}
          <View style={styles.compassMiddle}>

            {/* Inner compass */}
            <View style={styles.compassInner}>

              {/* Tick marks */}
              {tickMarks}

              {/* Degree labels */}
              <Text
                style={[
                  styles.degreeLabel,
                  styles.degreeTop,
                ]}
              >
                0°
              </Text>

              <Text
                style={[
                  styles.degreeLabel,
                  styles.degreeRight,
                ]}
              >
                90°
              </Text>

              <Text
                style={[
                  styles.degreeLabel,
                  styles.degreeBottom,
                ]}
              >
                180°
              </Text>

              <Text
                style={[
                  styles.degreeLabel,
                  styles.degreeLeft,
                ]}
              >
                270°
              </Text>

              {/* Rotating needle */}
              <Animated.View
                style={[
                  styles.needle,
                  {
                    transform: [{ rotate }],
                  },
                ]}
              >

                {/* Red North needle */}
                <View style={styles.needleNorth}>
                  <View style={styles.needleTriangle} />
                </View>

                {/* White South needle */}
                <View style={styles.needleSouth} />

              </Animated.View>

              {/* Cardinal directions */}
              <Text
                style={[
                  styles.cardinal,
                  styles.north,
                ]}
              >
                N
              </Text>

              <Text
                style={[
                  styles.cardinal,
                  styles.east,
                ]}
              >
                E
              </Text>

              <Text
                style={[
                  styles.cardinal,
                  styles.south,
                ]}
              >
                S
              </Text>

              <Text
                style={[
                  styles.cardinal,
                  styles.west,
                ]}
              >
                W
              </Text>

              {/* Center of compass */}
              <View style={styles.centerOuter}>
                <View style={styles.centerInner} />
              </View>

            </View>
          </View>
        </View>

      </View>

      {/* Heading reading */}
      <View style={styles.readingContainer}>

        <Text style={styles.degrees}>
          {heading}°
        </Text>

        <Text style={styles.heading}>
          {getDirection(heading)}
        </Text>

      </View>

      {/* Bottom instruction */}
      <Text style={styles.hint}>
        Rotate your phone to find your direction
      </Text>

    </View>
  );
}

const styles = StyleSheet.create({

  /*
   * Main screen
   */
  container: {
    flex: 1,
    backgroundColor: '#0B1120',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },

  /*
   * Settings button
   */
  settingsButton: {
    position: 'absolute',
    top: 48,
    right: 22,
    width: 54,
    height: 54,
    borderRadius: 27,
    backgroundColor: '#172235',
    borderWidth: 1,
    borderColor: '#3B4A61',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 30,
    elevation: 5,
  },

  settingsIcon: {
    fontSize: 28,
    color: '#E2E8F0',
  },

  /*
   * App title
   */
  title: {
    fontSize: 27,
    fontWeight: '800',
    color: '#F8FAFC',
    letterSpacing: 7,
    marginBottom: 5,
  },

  /*
   * Small subtitle below title.
   */
  subtitle: {
    fontSize: 10,
    fontWeight: '700',
    letterSpacing: 2.5,
    color: '#64748B',
    marginBottom: 25,
  },

  /*
   * Keeps the pointer attached
   * to the compass.
   */
  compassWrapper: {
    position: 'relative',
    width: 330,
    height: 330,
  },

  /*
   * Fixed pointer above compass.
   */
  fixedPointer: {
    position: 'absolute',
    top: -17,
    left: 0,
    right: 0,
    alignItems: 'center',
    zIndex: 20,
  },

  /*
   * Red fixed pointer.
   */
  pointerTriangle: {
    width: 0,
    height: 0,
    borderLeftWidth: 9,
    borderRightWidth: 9,
    borderTopWidth: 18,
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderTopColor: '#EF4444',
  },

  /*
   * Outer compass circle.
   */
  compassOuter: {
    width: 330,
    height: 330,
    borderRadius: 165,
    borderWidth: 3,
    borderColor: '#475569',
    backgroundColor: '#111827',
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 8,
  },

  /*
   * Middle compass circle.
   */
  compassMiddle: {
    width: 308,
    height: 308,
    borderRadius: 154,
    borderWidth: 2,
    borderColor: '#334155',
    backgroundColor: '#0F172A',
    alignItems: 'center',
    justifyContent: 'center',
  },

  /*
   * Inner compass circle.
   */
  compassInner: {
    width: 286,
    height: 286,
    borderRadius: 143,
    backgroundColor: '#1E293B',
    borderWidth: 1,
    borderColor: '#64748B',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  },

  /*
   * Tick mark container.
   */
  tick: {
    position: 'absolute',
    width: 286,
    height: 286,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },

  /*
   * Tick mark.
   */
  tickLine: {
    marginTop: 5,
    width: 2,
    borderRadius: 2,
  },

  /*
   * Major tick every 30 degrees.
   */
  majorTick: {
    height: 14,
    backgroundColor: '#CBD5E1',
  },

  /*
   * Minor tick every 10 degrees.
   */
  minorTick: {
    height: 7,
    backgroundColor: '#64748B',
  },

  /*
   * Cardinal letters.
   */
  cardinal: {
    position: 'absolute',
    fontSize: 25,
    fontWeight: '800',
    color: '#E2E8F0',
    zIndex: 10,
    backgroundColor: '#1E293B',
    paddingHorizontal: 3,
    paddingVertical: 1,
  },

  /*
   * North.
   */
  north: {
    top: 54,
    color: '#F87171',
  },

  /*
   * East.
   */
  east: {
    right: 58,
  },

  /*
   * South.
   */
  south: {
    bottom: 54,
  },

  /*
   * West.
   */
  west: {
    left: 58,
  },

  /*
   * Degree labels.
   */
  degreeLabel: {
    position: 'absolute',
    fontSize: 10,
    color: '#64748B',
    fontWeight: '600',
    zIndex: 2,
  },

  degreeTop: {
    top: 24,
  },

  degreeRight: {
    right: 24,
  },

  degreeBottom: {
    bottom: 24,
  },

  degreeLeft: {
    left: 24,
  },

  /*
   * Rotating needle.
   */
  needle: {
    position: 'absolute',
    width: 18,
    height: 190,
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 1,
  },

  /*
   * Red North needle.
   */
  needleNorth: {
    width: 12,
    height: 92,
    backgroundColor: '#EF4444',
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
    alignItems: 'center',
  },

  /*
   * Red triangle at the top
   * of the needle.
   */
  needleTriangle: {
    position: 'absolute',
    top: -10,
    width: 0,
    height: 0,
    borderLeftWidth: 9,
    borderRightWidth: 9,
    borderBottomWidth: 18,
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderBottomColor: '#EF4444',
  },

  /*
   * White South needle.
   */
  needleSouth: {
    width: 12,
    height: 92,
    backgroundColor: '#CBD5E1',
    borderBottomLeftRadius: 6,
    borderBottomRightRadius: 6,
  },

  /*
   * Center outer circle.
   */
  centerOuter: {
    position: 'absolute',
    width: 34,
    height: 34,
    borderRadius: 17,
    backgroundColor: '#0F172A',
    borderWidth: 3,
    borderColor: '#F8FAFC',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 15,
  },

  /*
   * Center red dot.
   */
  centerInner: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#EF4444',
  },

  /*
   * Heading reading container.
   */
  readingContainer: {
    alignItems: 'center',
    marginTop: 22,
    minHeight: 82,
  },

  /*
   * Heading degrees.
   */
  degrees: {
    fontSize: 46,
    fontWeight: '800',
    color: '#F8FAFC',
    letterSpacing: 1,
  },

  /*
   * Direction name.
   */
  heading: {
    fontSize: 17,
    fontWeight: '700',
    letterSpacing: 3,
    color: '#94A3B8',
    marginTop: 2,
  },

  /*
   * Bottom instruction.
   */
  hint: {
    position: 'absolute',
    bottom: 34,
    paddingHorizontal: 20,
    fontSize: 12,
    color: '#64748B',
    textAlign: 'center',
    letterSpacing: 0.3,
  },

});
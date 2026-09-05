import { useRouter } from 'expo-router';
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

export default function ExploreScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>

      {/* Header */}
      <View style={styles.header}>

        <TouchableOpacity
          style={styles.backButton}
          onPress={() => router.back()}
          activeOpacity={0.7}
        >
          <Text style={styles.backText}>‹</Text>
        </TouchableOpacity>

        <Text style={styles.title}>
          EXPLORE
        </Text>

        <View style={styles.headerSpace} />

      </View>

      {/* Scrollable Explore content */}
      <ScrollView
        style={styles.scroll}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >

        {/* Compass icon */}
        <View style={styles.compassIcon}>
          <Text style={styles.compassEmoji}>
            🧭
          </Text>
        </View>

        {/* Main title */}
        <Text style={styles.mainTitle}>
          Explore Directions
        </Text>

        {/* Description */}
        <Text style={styles.description}>
          Learn about the eight main compass directions
          and their approximate degree positions.
        </Text>

        {/* Direction cards */}
        <View style={styles.directionGrid}>

          {/* North */}
          <View style={styles.directionCard}>
            <View style={styles.cardTopRow}>
              <Text style={styles.directionLetter}>N</Text>
              <Text style={styles.directionDegree}>0°</Text>
            </View>

            <Text style={styles.directionName}>
              North
            </Text>

            <Text style={styles.directionRange}>
              337.5° – 22.5°
            </Text>
          </View>

          {/* Northeast */}
          <View style={styles.directionCard}>
            <View style={styles.cardTopRow}>
              <Text style={styles.directionLetter}>NE</Text>
              <Text style={styles.directionDegree}>45°</Text>
            </View>

            <Text style={styles.directionName}>
              Northeast
            </Text>

            <Text style={styles.directionRange}>
              22.5° – 67.5°
            </Text>
          </View>

          {/* East */}
          <View style={styles.directionCard}>
            <View style={styles.cardTopRow}>
              <Text style={styles.directionLetter}>E</Text>
              <Text style={styles.directionDegree}>90°</Text>
            </View>

            <Text style={styles.directionName}>
              East
            </Text>

            <Text style={styles.directionRange}>
              67.5° – 112.5°
            </Text>
          </View>

          {/* Southeast */}
          <View style={styles.directionCard}>
            <View style={styles.cardTopRow}>
              <Text style={styles.directionLetter}>SE</Text>
              <Text style={styles.directionDegree}>135°</Text>
            </View>

            <Text style={styles.directionName}>
              Southeast
            </Text>

            <Text style={styles.directionRange}>
              112.5° – 157.5°
            </Text>
          </View>

          {/* South */}
          <View style={styles.directionCard}>
            <View style={styles.cardTopRow}>
              <Text style={styles.directionLetter}>S</Text>
              <Text style={styles.directionDegree}>180°</Text>
            </View>

            <Text style={styles.directionName}>
              South
            </Text>

            <Text style={styles.directionRange}>
              157.5° – 202.5°
            </Text>
          </View>

          {/* Southwest */}
          <View style={styles.directionCard}>
            <View style={styles.cardTopRow}>
              <Text style={styles.directionLetter}>SW</Text>
              <Text style={styles.directionDegree}>225°</Text>
            </View>

            <Text style={styles.directionName}>
              Southwest
            </Text>

            <Text style={styles.directionRange}>
              202.5° – 247.5°
            </Text>
          </View>

          {/* West */}
          <View style={styles.directionCard}>
            <View style={styles.cardTopRow}>
              <Text style={styles.directionLetter}>W</Text>
              <Text style={styles.directionDegree}>270°</Text>
            </View>

            <Text style={styles.directionName}>
              West
            </Text>

            <Text style={styles.directionRange}>
              247.5° – 292.5°
            </Text>
          </View>

          {/* Northwest */}
          <View style={styles.directionCard}>
            <View style={styles.cardTopRow}>
              <Text style={styles.directionLetter}>NW</Text>
              <Text style={styles.directionDegree}>315°</Text>
            </View>

            <Text style={styles.directionName}>
              Northwest
            </Text>

            <Text style={styles.directionRange}>
              292.5° – 337.5°
            </Text>
          </View>

        </View>

        {/* Information card */}
        <View style={styles.infoCard}>
          <Text style={styles.infoIcon}>
            ✦
          </Text>

          <View style={styles.infoContent}>
            <Text style={styles.infoTitle}>
              Quick Tip
            </Text>

            <Text style={styles.info}>
              0° and 360° both represent North.
            </Text>
          </View>
        </View>

        {/* Bottom spacing */}
        <View style={styles.bottomSpace} />

      </ScrollView>

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
  },

  /*
   * Header
   */
  header: {
    height: 100,
    paddingHorizontal: 20,
    paddingTop: 45,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  /*
   * Back button
   */
  backButton: {
    width: 42,
    height: 42,
    borderRadius: 21,
    backgroundColor: '#172235',
    borderWidth: 1,
    borderColor: '#334155',
    alignItems: 'center',
    justifyContent: 'center',
  },

  backText: {
    color: '#F8FAFC',
    fontSize: 36,
    lineHeight: 38,
    fontWeight: '300',
  },

  /*
   * Page title
   */
  title: {
    fontSize: 22,
    fontWeight: '800',
    letterSpacing: 4,
    color: '#F8FAFC',
  },

  /*
   * Keeps title centered.
   */
  headerSpace: {
    width: 42,
  },

  /*
   * ScrollView
   */
  scroll: {
    flex: 1,
  },

  /*
   * Scrollable content
   */
  scrollContent: {
    paddingHorizontal: 20,
    paddingTop: 8,
    paddingBottom: 140,
    alignItems: 'center',
  },

  /*
   * Compass icon circle
   */
  compassIcon: {
    width: 72,
    height: 72,
    borderRadius: 36,
    backgroundColor: '#172235',
    borderWidth: 1,
    borderColor: '#334155',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 12,
  },

  compassEmoji: {
    fontSize: 37,
  },

  /*
   * Main heading
   */
  mainTitle: {
    fontSize: 25,
    fontWeight: '800',
    color: '#F8FAFC',
    marginTop: 16,
    textAlign: 'center',
  },

  /*
   * Description
   */
  description: {
    maxWidth: 330,
    fontSize: 14,
    lineHeight: 21,
    color: '#94A3B8',
    textAlign: 'center',
    marginTop: 8,
    marginBottom: 22,
  },

  /*
   * Direction card grid
   */
  directionGrid: {
    width: '100%',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },

  /*
   * Individual direction card
   */
  directionCard: {
    width: '48%',
    minHeight: 132,
    backgroundColor: '#172235',
    borderRadius: 16,
    padding: 15,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#334155',
  },

  /*
   * Top row inside card
   */
  cardTopRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  /*
   * Direction abbreviation
   */
  directionLetter: {
    fontSize: 23,
    fontWeight: '800',
    color: '#F87171',
  },

  /*
   * Degree shown on right
   */
  directionDegree: {
    fontSize: 14,
    fontWeight: '700',
    color: '#94A3B8',
  },

  /*
   * Direction name
   */
  directionName: {
    fontSize: 15,
    fontWeight: '700',
    color: '#E2E8F0',
    marginTop: 14,
  },

  /*
   * Degree range
   */
  directionRange: {
    fontSize: 11,
    color: '#64748B',
    marginTop: 7,
  },

  /*
   * Information card
   */
  infoCard: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#111C2E',
    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#26364D',
    padding: 15,
    marginTop: 8,
  },

  /*
   * Information icon
   */
  infoIcon: {
    width: 34,
    height: 34,
    borderRadius: 17,
    backgroundColor: '#1E293B',
    textAlign: 'center',
    textAlignVertical: 'center',
    fontSize: 17,
    color: '#F87171',
    marginRight: 12,
  },

  /*
   * Information content
   */
  infoContent: {
    flex: 1,
  },

  /*
   * Information title
   */
  infoTitle: {
    fontSize: 13,
    fontWeight: '700',
    color: '#E2E8F0',
    marginBottom: 3,
  },

  /*
   * Information text
   */
  info: {
    fontSize: 12,
    lineHeight: 18,
    color: '#64748B',
  },

  /*
   * Extra space at bottom.
   */
  bottomSpace: {
    height: 20,
  },

});
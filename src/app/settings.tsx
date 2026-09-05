import { useRouter } from 'expo-router';
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

export default function SettingsScreen() {
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

        <Text style={styles.title}>SETTINGS</Text>

        <View style={styles.headerSpace} />
      </View>

      <ScrollView
        style={styles.scroll}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >

        {/* Page introduction */}
        <View style={styles.intro}>
          <Text style={styles.introTitle}>
            Compass Settings
          </Text>

          <Text style={styles.introText}>
            Learn how to get the most accurate readings from
            your phone's compass.
          </Text>
        </View>

        {/* Calibration */}
        <View style={styles.card}>

          <View style={styles.cardHeader}>
            <View style={styles.iconCircle}>
              <Text style={styles.icon}>🧭</Text>
            </View>

            <View style={styles.cardHeaderText}>
              <Text style={styles.cardTitle}>
                Compass Calibration
              </Text>

              <Text style={styles.cardSubtitle}>
                Improve compass accuracy
              </Text>
            </View>
          </View>

          <View style={styles.divider} />

          <Text style={styles.cardText}>
            For the best accuracy, keep your phone away from
            magnets, metal objects and electronic devices.
          </Text>

          <Text style={styles.cardText}>
            If the compass seems inaccurate, slowly move your
            phone in a figure-eight motion several times.
          </Text>

        </View>

        {/* Accuracy tips */}
        <View style={styles.card}>

          <View style={styles.cardHeader}>
            <View style={styles.iconCircle}>
              <Text style={styles.checkIcon}>✓</Text>
            </View>

            <View style={styles.cardHeaderText}>
              <Text style={styles.cardTitle}>
                Accuracy Tips
              </Text>

              <Text style={styles.cardSubtitle}>
                Things to keep in mind
              </Text>
            </View>
          </View>

          <View style={styles.divider} />

          <View style={styles.tipRow}>
            <Text style={styles.tipBullet}>•</Text>
            <Text style={styles.tip}>
              Keep the phone away from magnets.
            </Text>
          </View>

          <View style={styles.tipRow}>
            <Text style={styles.tipBullet}>•</Text>
            <Text style={styles.tip}>
              Avoid placing the phone directly on metal.
            </Text>
          </View>

          <View style={styles.tipRow}>
            <Text style={styles.tipBullet}>•</Text>
            <Text style={styles.tip}>
              Hold the phone steadily while checking direction.
            </Text>
          </View>

          <View style={styles.tipRow}>
            <Text style={styles.tipBullet}>•</Text>
            <Text style={styles.tip}>
              If readings jump, move away from electrical equipment.
            </Text>
          </View>

        </View>

        {/* How it works */}
        <View style={styles.card}>

          <View style={styles.cardHeader}>
            <View style={styles.iconCircle}>
              <Text style={styles.questionIcon}>?</Text>
            </View>

            <View style={styles.cardHeaderText}>
              <Text style={styles.cardTitle}>
                How the Compass Works
              </Text>

              <Text style={styles.cardSubtitle}>
                Understanding your phone's sensors
              </Text>
            </View>
          </View>

          <View style={styles.divider} />

          <Text style={styles.cardText}>
            Your phone uses its magnetic field sensor together
            with the accelerometer to determine your direction.
          </Text>

          <Text style={styles.cardText}>
            The accelerometer helps compensate for the phone's
            tilt while the magnetometer detects Earth's magnetic
            field.
          </Text>

        </View>

        {/* Direction guide */}
        <View style={styles.card}>

          <View style={styles.directionHeader}>
            <Text style={styles.cardTitle}>
              Direction Guide
            </Text>

            <Text style={styles.directionHeaderText}>
              DEGREES
            </Text>
          </View>

          <View style={styles.divider} />

          {/* North */}
          <View style={styles.directionRow}>
            <View style={styles.directionBadge}>
              <Text style={styles.directionLetter}>N</Text>
            </View>

            <Text style={styles.directionName}>
              North
            </Text>

            <Text style={styles.directionDegree}>
              0° / 360°
            </Text>
          </View>

          {/* East */}
          <View style={styles.directionRow}>
            <View style={styles.directionBadge}>
              <Text style={styles.directionLetter}>E</Text>
            </View>

            <Text style={styles.directionName}>
              East
            </Text>

            <Text style={styles.directionDegree}>
              90°
            </Text>
          </View>

          {/* South */}
          <View style={styles.directionRow}>
            <View style={styles.directionBadge}>
              <Text style={styles.directionLetter}>S</Text>
            </View>

            <Text style={styles.directionName}>
              South
            </Text>

            <Text style={styles.directionDegree}>
              180°
            </Text>
          </View>

          {/* West */}
          <View style={[styles.directionRow, styles.lastDirectionRow]}>
            <View style={styles.directionBadge}>
              <Text style={styles.directionLetter}>W</Text>
            </View>

            <Text style={styles.directionName}>
              West
            </Text>

            <Text style={styles.directionDegree}>
              270°
            </Text>
          </View>

        </View>

        {/* Version */}
        <View style={styles.versionContainer}>
          <Text style={styles.version}>
            COMPASS APP
          </Text>

          <Text style={styles.versionNumber}>
            Version 1.0
          </Text>
        </View>

        {/* Extra bottom spacing */}
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
    paddingBottom: 60,
  },

  /*
   * Introduction
   */
  intro: {
    marginBottom: 20,
  },

  introTitle: {
    fontSize: 17,
    fontWeight: '700',
    color: '#E2E8F0',
    marginBottom: 5,
  },

  introText: {
    fontSize: 13,
    lineHeight: 20,
    color: '#64748B',
  },

  /*
   * Main cards
   */
  card: {
    backgroundColor: '#172235',
    borderRadius: 18,
    padding: 18,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: '#334155',
  },

  /*
   * Card header
   */
  cardHeader: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  /*
   * Icon circle
   */
  iconCircle: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: '#0F172A',
    borderWidth: 1,
    borderColor: '#334155',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },

  icon: {
    fontSize: 22,
  },

  checkIcon: {
    fontSize: 22,
    fontWeight: '800',
    color: '#F87171',
  },

  questionIcon: {
    fontSize: 20,
    fontWeight: '800',
    color: '#F87171',
  },

  /*
   * Header text beside icon
   */
  cardHeaderText: {
    flex: 1,
  },

  /*
   * Card title
   */
  cardTitle: {
    fontSize: 17,
    fontWeight: '800',
    color: '#F8FAFC',
  },

  /*
   * Small subtitle
   */
  cardSubtitle: {
    fontSize: 11,
    color: '#64748B',
    marginTop: 3,
  },

  /*
   * Divider
   */
  divider: {
    height: 1,
    backgroundColor: '#2A3A50',
    marginVertical: 15,
  },

  /*
   * Card paragraph
   */
  cardText: {
    fontSize: 14,
    lineHeight: 21,
    color: '#94A3B8',
    marginBottom: 8,
  },

  /*
   * Accuracy tip row
   */
  tipRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 9,
  },

  tipBullet: {
    fontSize: 18,
    lineHeight: 20,
    color: '#F87171',
    marginRight: 8,
  },

  tip: {
    flex: 1,
    fontSize: 13,
    lineHeight: 20,
    color: '#CBD5E1',
  },

  /*
   * Direction header
   */
  directionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  directionHeaderText: {
    fontSize: 9,
    fontWeight: '700',
    letterSpacing: 1.5,
    color: '#475569',
  },

  /*
   * Direction row
   */
  directionRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 11,
    borderBottomWidth: 1,
    borderBottomColor: '#2A3A50',
  },

  /*
   * Removes border from final row.
   */
  lastDirectionRow: {
    borderBottomWidth: 0,
    paddingBottom: 2,
  },

  /*
   * Direction badge
   */
  directionBadge: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: '#0F172A',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },

  directionLetter: {
    fontSize: 15,
    fontWeight: '800',
    color: '#F87171',
  },

  /*
   * Direction name
   */
  directionName: {
    flex: 1,
    fontSize: 14,
    fontWeight: '600',
    color: '#E2E8F0',
  },

  /*
   * Direction degree
   */
  directionDegree: {
    fontSize: 13,
    color: '#94A3B8',
    fontWeight: '600',
  },

  /*
   * Version section
   */
  versionContainer: {
    alignItems: 'center',
    marginTop: 4,
    marginBottom: 10,
  },

  version: {
    fontSize: 10,
    fontWeight: '800',
    letterSpacing: 2,
    color: '#475569',
  },

  versionNumber: {
    fontSize: 11,
    color: '#334155',
    marginTop: 4,
  },

  /*
   * Extra bottom spacing
   */
  bottomSpace: {
    height: 20,
  },

});
# 🧭 CompassApp

A simple, modern and responsive compass application built with **React Native** and **Expo**.

CompassApp uses the device's **magnetometer and accelerometer sensors** to determine the direction and provide a smooth, real-time compass experience.

---

## 📱 Download the App

### Android APK

You can download and install the latest Android APK from the link below:

👉 **[Download CompassApp APK](https://expo.dev/accounts/kruthi_ham/projects/CompassApp/builds/c64ce500-b870-4fe0-985f-cf3b919cfebb)**

> **Note:** This is an Android APK built using Expo EAS Internal Distribution.  
> On Android, open the link and select **Install** to download the app.

---

## ✨ Features

- 🧭 Real-time digital compass
- 📍 Displays current heading from **0° to 360°**
- 🔴 Animated compass needle
- 🧭 Cardinal directions:
  - North (N)
  - East (E)
  - South (S)
  - West (W)
- ↗️ Intermediate directions:
  - Northeast (NE)
  - Southeast (SE)
  - Southwest (SW)
  - Northwest (NW)
- 📐 Degree markings around the compass
- 📱 Uses device motion sensors
- 🎯 Tilt compensation for improved heading accuracy
- 🔄 Smooth needle rotation
- ⚙️ Settings and calibration/help screen
- 🗺️ Explore screen with direction ranges
- 🌙 Modern dark-themed interface
- 📲 Optimized for mobile devices

---

## 🛠️ Technologies Used

- **React Native**
- **Expo**
- **TypeScript**
- **Expo Router**
- **Expo Sensors**
- **React Native Animated API**
- **Expo EAS Build**

---

## 🧠 How It Works

CompassApp uses two device sensors to calculate the user's heading.

### Magnetometer

The magnetometer measures the Earth's magnetic field along the device's X, Y and Z axes.

### Accelerometer

The accelerometer provides information about the device's orientation relative to gravity.

The app combines readings from both sensors to perform a basic tilt-compensation calculation.

The resulting magnetic heading is converted into degrees:

```text
0°   → North
45°  → Northeast
90°  → East
135° → Southeast
180° → South
225° → Southwest
270° → West
315° → Northwest
360° → North

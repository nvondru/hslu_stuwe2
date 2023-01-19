<template>
  <PageBackground />
  <ColorBorder :role="playerInfo.role" />
  <HeaderBar
    :screenType="ScreenType.TriggerSelection"
    @handle_btn_back="handle_btn_back"
    @handle_btn_leave="$emit('handle_btn_leave')"
  />
  <h1>{{ playerInfo.name }}</h1>
  <h2>Choose your playstyle</h2>
  <div id="triggerSelectionGrid">
    <TriggerSelectionCard
      :triggerOption="TriggerOption.Shake"
      class="disabled"
    />
    <TriggerSelectionCard
      :triggerOption="TriggerOption.Touch"
      @click="$emit('handle_trigger_selection', TriggerOption.Touch)"
    />
    <TriggerSelectionCard
      :triggerOption="TriggerOption.Voice"
      class="disabled"
    />
  </div>
</template>

<script setup>
//Classes
import Role from "../../classes/Role.js";
import TriggerOption from "../../classes/TriggerOption.js";
import ScreenType from "../../classes/ScreenType.js";

//Components
import PageBackground from "../Modules/PageBackground.vue";
import HeaderBar from "../Modules/HeaderBar.vue";
import ColorBorder from "../Modules/ColorBorder.vue";
import TriggerSelectionCard from "../Modules/TriggerSelectionCard.vue";

let props = defineProps({
  playerInfo: Object,
});

let emit = defineEmits([
  "navigate_to",
  "release_role",
  "handle_trigger_selection",
]);

let handle_btn_back = () => {
  emit("release_role");
  emit("navigate_to", ScreenType.RoleSelection);
};

/**
 * Source: https://stackoverflow.com/questions/21741841/detecting-ios-android-operating-system
 * Determine the mobile operating system.
 * This function returns one of 'iOS', 'Android', 'Windows Phone', or 'unknown'.
 *
 * @returns {String}
 */
let getMobileOperatingSystem = () => {
  var userAgent = navigator.userAgent || navigator.vendor || window.opera;

  // Windows Phone must come first because its UA also contains "Android"
  if (/windows phone/i.test(userAgent)) {
    return "Windows Phone";
  }

  if (/android/i.test(userAgent)) {
    return "Android";
  }

  // iOS detection from: http://stackoverflow.com/a/9039885/177710
  if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
    return "iOS";
  }

  return "unknown";
};

let registerShakeListeners = () => {
  // for testing -- can be removed
  console.log(getMobileOperatingSystem());

  if (getMobileOperatingSystem() == "iOS") {
    DeviceMotionEvent.requestPermission().then((response) => {
      if (response == "granted") {
        emit("handle_trigger_selection", TriggerOption.Shake);
      }
    });
  } else if (getMobileOperatingSystem() == "Android") {
    if (window.DeviceMotionEvent != undefined) {
      emit("handle_trigger_selection", TriggerOption.Shake);
    }
  } else {
    alert("Please use a mobile device :)");
  }
};
</script>

<style scoped>
h1,
h2 {
  text-align: center;
}

#triggerSelectionGrid {
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  gap: 20px;
  justify-content: center;
  align-items: center;
}
.disabled {
  opacity: 0.5;
  pointer-events: none;
}
</style>

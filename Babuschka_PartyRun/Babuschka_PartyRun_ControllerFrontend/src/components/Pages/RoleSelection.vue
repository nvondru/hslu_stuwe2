<template>
  <PageBackground />
  <HeaderBar
    :screenType="ScreenType.RoleSelection"
    @handle_btn_back="$emit('navigate_to', ScreenType.EnterName)"
    @handle_btn_leave="$emit('handle_btn_leave')"
  />
  <h1 id="playerName">{{ playerInfo.name }}</h1>
  <h2>Choose your role:</h2>
  <div class="flexContainer">
    <div id="selectionGrid">
      <RoleSelectionCard
        :role="Role.Jump"
        :class="{ selected: props.roleState.jump.selected }"
        @click="$emit('handle_select_role', Role.Jump)"
      />
      <RoleSelectionCard
        :role="Role.ShotCharge"
        :class="{ selected: props.roleState.shotCharge.selected }"
        @click="$emit('handle_select_role', Role.ShotCharge)"
      />
      <RoleSelectionCard
        :role="Role.ShotRelease"
        :class="{ selected: props.roleState.shotRelease.selected }"
        @click="$emit('handle_select_role', Role.ShotRelease)"
      />
      <RoleSelectionCard :role="Role.Enemy" :class="{ selected: true }" />
    </div>
  </div>
</template>

<script setup>
// Classes
import ScreenType from "../../classes/ScreenType.js";
import Role from "../../classes/Role";
// Components
import PageBackground from "../Modules/PageBackground.vue";
import HeaderBar from "../Modules/HeaderBar.vue";
import RoleSelectionCard from "../Modules/RoleSelectionCard.vue";

let props = defineProps({
  playerInfo: Object,
  roleState: Object,
});
</script>

<style scoped>
#playerName {
  text-align: center;
}
h2 {
  text-align: center;
}
#selectionGrid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  gap: 15px;
  /* padding: 0px 2rem; */
  box-sizing: border-box;
}
.selected {
  opacity: 0.5;
  pointer-events: none;
}
.flexContainer {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}
</style>

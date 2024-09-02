<template>
  <div></div>
</template>

<script lang="ts" setup>
import Community from "~/entities/community";
import Person from "~/entities/person";

const community = new Community({ id: 'abc' ,name: "123", description: "彩印包装工业" });

const person = new Person({ name: "123", sex: 1 });

person.joinCommunity(community)

community.printMembers()

console.log(community);


</script>

<style></style>

<script setup>
import CurrentTime from '@/components/feature/time/CurrentTime.vue'
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu'
import {
  faFileUser,
  faHeadphonesSimple,
  faHouseHeart,
} from '@fortawesome/pro-duotone-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { Link, usePage } from '@inertiajs/vue3'
import { computed, ref } from 'vue'

const page = usePage()

const currentRoute = computed(() => {
  const route = page.url !== `/` ? page.url : null

  return route
})

const navigationItems = ref([
  {
    name: `Jerm's Log`,
    icon: faHouseHeart,
    route: `home`,
  },
  {
    name: `Música`,
    icon: faHeadphonesSimple,
    route: `musica.index`,
  },
  {
    name: `Resume`,
    icon: faFileUser,
    route: `resume.index`,
  },
])
</script>

<template>
  <NavigationMenu
    class="mx-auto flex w-full max-w-3xl flex-col items-center justify-center py-4"
  >
    <NavigationMenuList>
      <NavigationMenuItem
        v-for="navigationItem in navigationItems"
        :key="navigationItem.name"
        :class="{
          'text-[hsla(330,90%,40%,1)]': route().current(navigationItem.route),
        }"
      >
        <NavigationMenuLink :class="navigationMenuTriggerStyle()" as-child>
          <Link
            :href="navigationItem.route ? route(navigationItem.route) : `/`"
          >
            <FontAwesomeIcon
              class="mr-2"
              :icon="navigationItem.icon"
              fixed-width
            />

            <span class="font-bold">{{ navigationItem.name }}</span>
          </Link>
        </NavigationMenuLink>
      </NavigationMenuItem>
    </NavigationMenuList>
  </NavigationMenu>
</template>

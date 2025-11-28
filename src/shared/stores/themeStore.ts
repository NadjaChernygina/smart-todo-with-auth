import { defineStore } from "pinia";
import { ref, watch } from "vue";

export const useThemeStore = defineStore("theme", () => {
  const theme = ref<"light" | "dark">(
    (localStorage.getItem("theme") as "light" | "dark") || "light",
  );

  const applyTheme = () => {
    const html = document.documentElement;

    if (theme.value === "dark") {
      html.classList.add("dark");
    } else {
      html.classList.remove("dark");
    }
  };

  applyTheme();

  watch(theme, (val) => {
    localStorage.setItem("theme", val);
    applyTheme();
  });

  const toggleTheme = () => {
    theme.value = theme.value === "light" ? "dark" : "light";
  };

  return {
    theme,
    toggleTheme,
  };
});

import { mount, shallowMount } from "@vue/test-utils";
import Notas from "@/components/Notas.vue";

describe("Testing component Notas", () => {
  it("¿Does the component exist?", () => {
    const wrapper = shallowMount(Notas);
    expect(wrapper.exists()).toBe(true);
  });
  it("¿Does this class exist in the component?", () => {
    const wrapper = shallowMount(Notas);
    expect(wrapper.attributes("class")).toBe("componente-notas");
  });
  it("¿Does this id exist in the component?", () => {
    const wrapper = shallowMount(Notas);
    expect(wrapper.attributes("id")).toBe("componente");
  });
  it("¿Does this text exist in the component?", () => {
    const wrapper = shallowMount(Notas);
    expect(wrapper.text()).toMatch("Introduzca su nombre");
  });
  it("¿Does the input nombre exist in the component?", () => {
    const wrapper = mount(Notas);
    const input = wrapper.get("input[name=nombre]");
    expect(input.attributes("id")).toBe("nombre");
  });
  it("¿Does the input materia exist in the component?", () => {
    const wrapper = mount(Notas);
    const input = wrapper.get("input[name=materia]");
    expect(input.attributes("id")).toBe("materia");
  });
  it("¿Does the input nota exist in the component?", () => {
    const wrapper = mount(Notas);
    const input = wrapper.get("input[name=nota]");
    expect(input.attributes("id")).toBe("nota");
  });
  it("¿Does the component show the name from the input nombre?", async () => {
    const wrapper = mount(Notas);
    const input = wrapper.find("input[name=nombre]");
    await input.setValue("Pepito");
    expect(input.element.value).toBe("Pepito");
  });
  it("¿Does the component show the name from the input materia?", async () => {
    const wrapper = mount(Notas);
    const input = wrapper.find("input[name=materia]");
    await input.setValue("Matemáticas");
    expect(input.element.value).toBe("Matemáticas");
  });
  it("¿Does the component show the name from the input nota?", async () => {
    const wrapper = mount(Notas);
    const input = wrapper.find("input[name=nota]");
    await input.setValue("7");
    expect(input.element.value).toBe("7");
  });
});

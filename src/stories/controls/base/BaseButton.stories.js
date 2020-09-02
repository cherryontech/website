import BaseButton from "../../../../src/components/controls/base/BaseButton.vue";

export default {
  title: "components/controls/base/BaseButton",
  component: BaseButton,
  argTypes: {
    buttonLabel: {
      control: "text",
      defaultValue: "Nice Label!",
    },
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { BaseButton },
  template: "<BaseButton>{{buttonLabel}}</BaseButton>",
});

export const Base = Template.bind({});

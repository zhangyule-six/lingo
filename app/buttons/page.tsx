import { Button } from "@/components/ui/button";

const ButtonsPage = () => {
  return (
    <div className="p-4 space-y-4 flex flex-col max-w-[200px]">
      <Button>Defalut</Button>
      <Button variant="primary">Primary</Button>
      <Button variant="primaryOutline">primary Outline</Button>
      <Button variant="secondary">secondary</Button>
      <Button variant="secondaryOutline">secondaryOutline</Button>
      <Button variant="danger">secondaryOutline</Button>
      <Button variant="dangerOutline">secondary Outline</Button>
    </div>
  );
};

export default ButtonsPage;

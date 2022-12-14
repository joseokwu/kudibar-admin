import Input from "../../../component/Input";
export const CompanyInfo = () => {
  return (
    <section className="my-7">
      <label htmlFor="company info" className="mt-[10px] font-[16px]">
        Name
      </label>
      <Input placeholder="Ex. Save the children" />
    </section>
  );
};

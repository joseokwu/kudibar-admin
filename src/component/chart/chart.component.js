const Chart = () => {
  return (
    <div className="rounded-md p-8 bg-white mx-5 mb-3 w-full gap-[50px]">
      <div className="flex items-center justify-between">
        <p>Total Visit - 300</p>
        <select className="text-[#12152899] font-[14px] p-[0.4rem] border-[1px] rounded border-[#1215281A]">
          <option value="">Most users</option>
          <option value="Most Recent">Daily</option>
          <option value="Most Recent">Weekly</option>
          <option value="Most Recent">Monthly</option>
          <option value="Most Recent">Yearly</option>
        </select>
      </div>
    </div>
  );
};
export default Chart;

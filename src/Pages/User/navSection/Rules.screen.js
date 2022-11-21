const Rules = () => {
  return (
    <section className="grid grid-cols-2">
      <main className="flex  justify-start my-3 mx-2  gap-[1rem] items-start bg-[whitesmoke] p-3 rounded-[8px] ">
        {/* <div className="mt-[7px] w-[10px] h-[10px] rounded-[50%] flex justify-center items-center bg-[green]"></div> */}
        <img src={"/asset/dot.svg"} className="mt-[7px]" alt="" />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quam semper bibendum metus turpis
          ac amet pellentesque. Ipsum et mauris cras ut.
        </p>
      </main>
      <main className="flex justify-start my-3 mx-2  gap-[1rem] items-start bg-[whitesmoke] p-3 rounded-[8px] ">
        {/* <div className="mt-[7px] w-[10px] h-[10px] rounded-[50%] flex justify-center items-center bg-[green]"></div> */}
        <img src={"/asset/dot.svg"} alt="" className="mt-[7px]" />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quam semper bibendum metus turpis
          ac amet pellentesque. Ipsum et mauris cras ut.
        </p>
      </main>
      <main className="flex justify-start my-3 mx-2  gap-[1rem] items-start bg-[whitesmoke] p-3 rounded-[8px] ">
        {/* <div className="mt-[7px] w-[10px] h-[10px] rounded-[50%] flex justify-center items-center bg-[green]"></div> */}
        <img className="mt-[7px]" src={"/asset/dot.svg"} alt="" />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quam semper bibendum metus turpis
          ac amet pellentesque. Ipsum et mauris cras ut.
        </p>
      </main>
    </section>
  );
};
export default Rules;

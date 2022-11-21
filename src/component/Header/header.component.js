const Header = ({ toggleNav, isCrossed }) => {
  return (
    <div className="h-[56px] flex items-center justify-end  py-[12px] px-[20px] fixed top-0 left-0  md:relative bg-white z-50">
      {/* <img className="w-[100px] h-[32px] -ml-4 md:hidden mr-auto" src={brandImg} alt="bramd-logo" /> */}

      <img src="/asset/notifyicon.svg" alt="" className=" mr-[19px]hidden md:block" />
      <img src="/asset/messageicon.svg" alt="" className=" mr-[15px] ml-[15px] hidden md:block" />
      <div className="flex  items-center gap-1">
        <img
          src=""
          alt=""
          className="w-[32px] h-[32px] object-cover object-top rounded-full bg-black"
        />
        <span>Obodo Bright</span>
      </div>
    </div>
  );
};

export default Header;

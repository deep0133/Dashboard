const RightMenu = ({ navItems }) => {
  return (
    <>
      {navItems.map((val, index) => {
        return (
          <h3
            key={index}
            className={`text-center ${
              index === 0
                ? "text-violet-800 border-b-2 border-[#6218C0]"
                : "text-blue-900 opacity-40"
            }   px-1 text-sm font-semibold font-poppin leading-tight py-3`}
          >
            {val.name}
          </h3>
        );
      })}
    </>
  );
};

export default RightMenu;

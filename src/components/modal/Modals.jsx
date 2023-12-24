const Modals = ({ isvisible, onclose }) => {
  if (!isvisible) return null;
  return (
    <>
      <>
        <div className="flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
          <div className="relative w-1/3 my-6 mx-auto ">
            <div className="border-0 rounded-lg  shadow-lg relative flex flex-col justify-center items-center text-white w-full bg-black outline-none">
              <div className="relative p-6 flex justify-end items-center gap-3 text-white">
                <span>سبد خرید</span>
                <span>محصول</span>
              </div>
              <button
                className="p-5 bg-white text-black text-bold  w-10 h-10 bg-transparent border border-spacing-0 border-gray-50"
                onClick={() => onclose()}
              >
                close
              </button>
            </div>
          </div>
        </div>
      </>
    </>
  );
};

export default Modals;

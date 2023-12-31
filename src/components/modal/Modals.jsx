const Modals = ({ isvisible, onclose }) => {
  if (!isvisible) return null;
  return (
    <>
      <div className="flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
        <div className="relative w-1/3 h-2/3 my-6 mx-auto ">
          <div className="border-0 rounded-lg  bg-black shadow-lg relative flex flex-col justify-center items-center text-white  outline-none">
            <div
              className="relative p-6 flex justify-end items-center gap-3 text-white"
              dir="rtl"
            >
              <span>سبد خرید</span>
              <span>محصول</span>
            </div>
            <button
              className="bg-white text-black text-bold flex justify-center  m-0 w-16 text-center rounded-md mb-5 bg-transparent "
              onClick={() => onclose()}
            >
              close
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modals;

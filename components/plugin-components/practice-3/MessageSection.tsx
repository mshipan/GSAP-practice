const MessageSection = () => {
  return (
    <section className="w-screen h-screen bg-amber-900 relative z-20 flex flex-col items-center justify-between py-36">
      <div className="msg-wrapper relative space-y-20 flex flex-col items-center">
        <h1 className="text-8xl font-antonio uppercase font-semibold text-amber-100 max-w-2xl text-center">
          Stir up your fearless past and
        </h1>
        <div className="msg-txt-scroll bg-amber-600 border-8 border-amber-900 w-fit font-bold leading-none my-0 pb-4 px-2 text-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rotate-3">
          <h2 className="text-8xl font-antonio uppercase text-amber-900 text-center">
            fuel up
          </h2>
        </div>
        <h1 className="text-8xl font-antonio uppercase max-w-4xl text-center">
          your future with every gulp of perfect protein
        </h1>
      </div>
      <div>
        <p className="max-w-md text-center">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum ipsa
          maxime est! Distinctio ratione laborum temporibus illum hic odio
          corrupti.
        </p>
      </div>
    </section>
  );
};

export default MessageSection;

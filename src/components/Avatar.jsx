import avatar from "../assets/profile.webp";

const Avatar = () => {
  return (
    <section className="self-end pb-2">
      <div className="flex justify-end items-center gap-2 p-2 rounded">
        <div className="flex flex-col">
          <h6 className="text-xs font-bold">Jane Doe</h6>
          <p className="text-xs text-primaryPurple font-semibold">Student</p>
        </div>
        <img src={avatar} alt="" className="w-[36px] h-8 rounded-lg" />
      </div>
    </section>
  );
};

export default Avatar;

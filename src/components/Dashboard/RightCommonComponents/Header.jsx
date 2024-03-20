export default function Header({ icon, title }) {
  return (
    <div className='flex w-full px-5 items-center'>
      {icon}
      <h3 className='text-violet-800 text-sm font-medium font-poppin ml-1'>
        {title}
      </h3>
    </div>
  );
}

import { categories } from '../../constants/constant';
const sideFooterOption = [
  'Status',
  ' Blog',
  ' Writers',
  ' Careers',
  ' Privacy',
  ' Terms',
  ' About',
  ' Text',
  'to',
  'speech',
  'Teams',
];
function CategorySection() {
  return (
    <>
      <div className='flex flex-col mx-3'>
        <div className='w-full max-w-screen-lg '>
          <div className='bg-white rounded-lg gap-6 flex flex-col p-8'>
            <div className='h-5 pb-3 flex-col  justify-start items-start inline-flex'>
              <div className="text-neutral-800  text-base font-medium font-['Helvetica Neue'] leading-tight">
                Discover more of what matters to you
              </div>
            </div>
            <div className='flex flex-wrap gap-2 justify- '>
              {categories.map((category, index) => (
                <div
                  key={index}
                  className='bg-gray-100 py-5 flex items-center justify-center w-min max-h-[24px] rounded-full px-6 cursor-pointer whitespace-nowrap min-h-min'
                >
                  <a
                    className='text-black hover:underline'
                    rel='noopener follow'
                    href={category.link}
                  >
                    {category.name}
                  </a>
                </div>
              ))}
            </div>
            <div className='justify-start items-start inline-flex'>
              <div className="text-green-700 text-sm font-normal font-['Helvetica Neue'] leading-tight">
                See more topics
              </div>
            </div>
          </div>
        </div>
        <hr className='border-gray-200 mb-9' />
        <div className='xl:flex md:hidden hidden mx-16 gap-1 flex-wrap'>
          {sideFooterOption.map((item, index) => (
            <p
              className="m-2 text-neutral-500 text-sm font-normal font-['Helvetica Neue'] leading-tight"
              key={index}
            >
              {item}
            </p>
          ))}
        </div>
      </div>
    </>
  );
}

export default CategorySection;

import { AppImages } from "../../Asset/images/image";

function Loading({ height = "h-[20vh]" }) {
    return (  
        <div className={`${height} block m-auto relative`}>
            <img src={AppImages.loading} alt="loading" className='w-[50px] text-black m-auto block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]' />
        </div>
    );
}

export default Loading;
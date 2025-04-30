interface propTypes {
    isOpen: boolean;
}

const burger = (props: propTypes) => {
    return (
            <div className="relative group">
                <div className="relative flex overflow-hidden items-center justify-center rounded-xl w-[50px] h-[50px] transform transition-all ring-0 duration-200">
                    <div className="flex flex-col justify-between w-[20px] h-[20px] transform transition-all duration-300 origin-center overflow-hidden">

                    {!props.isOpen &&<>
                        <div className="bg-text h-[2px] w-7 transform transition-all duration-300 origin-left"></div>
                        <div className="bg-text h-[2px] w-7 rounded transform transition-all duration-300"></div>
                        <div className="bg-text h-[2px] w-7 transform transition-all duration-300 origin-left"></div>
                        </>}

                        {props.isOpen &&
                            <div className="absolute items-center justify-between transform transition-all duration-500 top-2.5 group-focus:translate-x-0 flex w-0">
                                <div className="absolute bg-text h-[2px] w-5 rotate-45"></div>
                                <div className="absolute bg-text h-[2px] w-5 -rotate-45"></div>
                            </div>}
                    </div>
                </div>
            </div>
    )
}
export default burger;
interface propTypes {
    description: string,

}

const button = (props: propTypes) => {

    return (
        <div className="p-4">
            <button className="bg-primary text-white px-4 py-2 rounded-lg hover:bg-hover transition duration-300 w-full font-semibold">
                {props.description}
            </button>
        </div>
    );
}

export default button;
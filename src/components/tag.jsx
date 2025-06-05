

export default function Tag({ label }) {
    return (
        <div className="bg-tag p-5 rounded-full h-[41px] items-center justify-center inline-flex ">
            <p className="font-semibold text-Text">{label}</p>
        </div>
    );
}
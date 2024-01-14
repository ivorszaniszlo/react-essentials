export default function TabButton({ children }) {
    function handleClick() {
        console.log('Hello World!');
    }
    return (
    <l1>
        <button onClick={handleClick}>{children}</button>
    </l1>
    );
}

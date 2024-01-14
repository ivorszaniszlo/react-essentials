export default function TabButton({ children, onSelect, isSelected }) {
    return (
    <l1>
        <button className={isSelected ? 'active' : undefined} onClick={onSelect}>{children}</button>
    </l1>
    );
}

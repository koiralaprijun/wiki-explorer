export function HoverPopupBoxView({
    children,
    x,
    y,
}: {
    children: React.ReactNode;
    x: number;
    y: number;
}) {
    return (
        <div
            className="hover-popup"
            style={{
                transform: `translate(${x + 10}px, ${y + 10}px)`,
            }}
        >
            {children}
        </div>
    );
}

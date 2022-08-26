import React from "react";

const ReactStickySegment: React.FC<{ numberOfColumns: number }> = ({ numberOfColumns }) => {
    return (
        <div>
            Hello, world! - {numberOfColumns}
        </div>
    );
};

export default ReactStickySegment;

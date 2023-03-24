import React from "react";

type PROPS = {
    path: string;
}

const ImgView: React.FC<PROPS> = (props) => {
    return (
        <div>
            <img
                width="100%"
                height="100%"
                src={props.path}
            />
        </div>
    )
};

export default ImgView;
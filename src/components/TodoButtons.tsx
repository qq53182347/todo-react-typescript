import {Dispatch, FunctionComponent, SetStateAction} from "react";

interface Props {
    filterNames: string[],
    setFilter:Dispatch<SetStateAction<string>>;
}

export const TodoButtons: FunctionComponent<Props> = (props) => {
    const filterList = props.filterNames.map(name => (
        <button type="button"  className="btn toggle-btn"  onClick={() => props.setFilter(name)}>
            <span className="visually-hidden">Show </span>
            <span>{name}</span>
            <span className="visually-hidden"> tasks</span>
        </button>
    ));

    return (
        <div  className="filters btn-group stack-exception">{filterList}</div>
    );
}
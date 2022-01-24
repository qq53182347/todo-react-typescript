import {Dispatch, FunctionComponent, SetStateAction} from "react";

interface Props {
    filterNames: string[],
    setFilter:Dispatch<SetStateAction<string>>;
}

export const TodoButtons: FunctionComponent<Props> = (props) => {
    const filterList = props.filterNames.map(name => (
        <button type="button"  onClick={() => props.setFilter(name)}>
            <span>Show </span>
            <span>{name}</span>
            <span> tasks</span>
        </button>
    ));

    return (
        <>{filterList}</>
    );
}
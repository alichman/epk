import React, { Ref, useCallback, useEffect, useMemo, useRef } from "react";
import '../App.css';
import './button.css';

export function NavlessButton ({text, onPress, style='buttonDiv'}:{text:string, onPress: ()=>void, style?:string}) {
    const buttonRef = useRef<HTMLDivElement>(undefined);
    useEffect(() => {
        buttonRef.current?.addEventListener('click', onPress);
        return () => buttonRef.current?.removeEventListener('click', onPress);
    }, [buttonRef]);

    return <div className={style} ref={buttonRef as Ref<HTMLDivElement>}>
        <h2>
            {text}
        </h2>
    </div>
}

export default function ({text, currentIndex, buttonIndex, stateSetter}:{text: string, currentIndex:number, buttonIndex: number, stateSetter: (val:number)=>void}) {
    const style = useMemo(() => 'buttonDiv' + (currentIndex==buttonIndex ? ' selected' : ''), [currentIndex, buttonIndex]);
    const onPress = useCallback(() => stateSetter(buttonIndex), [buttonIndex]);
    return NavlessButton({text, onPress, style});
}
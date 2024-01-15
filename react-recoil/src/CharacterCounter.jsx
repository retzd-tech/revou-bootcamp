import {
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from "recoil";

const counterState = atom({
  key: 'counter', // unique ID (with respect to other atoms/selectors)
  default: 0, // default value (aka initial value)
});

const characterCount = selector({
  key: 'characterCount', // unique ID (with respect to other atoms/selectors)
  get: ({get}) => {
    const text = get(counterState);

    return text.length;
  },
});

function CharacterCount() {
  // const [text] = useRecoilState(counterState);
  const count = useRecoilValue(characterCount);

  return <>Character: {count}</>;
}

function TextInput() {
    const [text, setText] = useRecoilState(counterState);
  
    const onChange = (event) => {
      setText(event.target.value);
    };
  
    return (
      <div>
        <input type="text" value={text} onChange={onChange} />
        <br />
        Echo: {text}
      </div>
    );
  }

function CharacterCounter() {
  return (
    <div>
      <TextInput />
      <CharacterCount />
    </div>
  );
}

export default CharacterCounter;

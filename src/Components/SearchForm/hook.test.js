import {renderHook,act} from '@testing-library/react-hooks';
import useForm from 'Components/SearchForm/hook'

const setup = (param) => renderHook(()=> useForm(param))

test('Should change keyword' , () => {
    const { result } = setup();

    act(() => {
        result.current.updateKeyword("matrix")
    })

    expect(result.current.keyword).toBe("matrix")
})

test('Should uses initialKeyword' , () => {
    const { result } = setup({initialKeyword : "cobra kai"});

    expect(result.current.keyword).toBe("cobra kai")
})

test('Should update correctly times when used twice' , () => {
    const { result } = setup({initialKeyword : "cobra kai"});

    act(() => {
        result.current.updateKeyword("m")
        result.current.updateKeyword("ma")
    })

    expect(result.current.keyword).toBe("ma")
    expect(result.current.times).toBe(2)
})
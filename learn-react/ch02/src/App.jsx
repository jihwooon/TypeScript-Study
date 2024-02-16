import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import './App.css'
import DiaryEditor from './DiaryEditor'
import DiaryList from './DiaryList'
import LifeCycle from './Lifecycle'
import OptimizedTest from './OptimizeTest'

function App() {
  const [data, setData] = useState([])
  const dataId = useRef(0);

  const getData = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/comments').then((res) => res.json())
    const initData = res.slice(0, 20).map((it) => {
      return {
        author: it.email,
        content: it.body,
        emotion: Math.floor(Math.random * 5) + 1,
        create_date: new Date().getTime(),
        id: dataId.current++
      }
    })

    setData(initData)
  }

  useEffect(() => {
    getData()
  }, [])

  const onCreate = useCallback((author, content, emotion) => {
    const created_date = new Date().getTime()
    const newItem = {
      author,
      content,
      emotion,
      created_date,
      id: dataId.current
    }
    dataId.current += 1;
    setData((data) => [newItem, ...data])
  }, [])

  const onRemove = (targeId) => {
    const newDiaryList = data.filter((it) => it.id !== targeId)
    setData(newDiaryList)
  }

  const onEdit = (targetId, newContent) => {
    setData(
      data.map((it) =>
        it.id === targetId ? { ...it, content: newContent } : it
      )
    );
  }

  const getDiaryAnalysis = useMemo(() => {
    const goodCount = data.filter((it) => it.email > 3).length;
    const badCount = data.length - goodCount;
    const goodRatio = (goodCount / data.length) * 100;

    return { goodCount, badCount, goodRatio }
  }, [data.length]
  );

  const { goodCount, badCount, goodRatio } = getDiaryAnalysis;

  return (
    <div className='App'>
      <OptimizedTest />
      <h1>Hello World!</h1>
      <LifeCycle />
      <DiaryEditor onCreate={onCreate} />
      <div>전체 일기: {data.length}</div>
      <div>기분 좋은 일기 개수: {goodCount}</div>
      <div>기분 나쁜 일기: {badCount}</div>
      <div>기분 나쁜 일기: {goodRatio}</div>
      <DiaryList onRemove={onRemove} onEdit={onEdit} dummayList={data} />
    </div>
  )
}

export default App

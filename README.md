# Drag and Drop
## Draggable
使元素可拖動
將`draggable`屬性設置為 `true`
```jsx!
<img draggable="true" />
```
## DataTransfer
用於保存在拖放操作期間被拖動的資料。
### [`dataTransfer.setData()`](https://developer.mozilla.org/en-US/docs/Web/API/DataTransfer/setData)

> **僅傳入字串。**

#### 語法：
data 為字串：
```jsx=
const onDragStart = ((e, data) => {
  e.dataTransfer.setData("dataName", data);
})
```
data 為其他：(用JSON字串方式傳入)
```jsx=
const onDragStart = ((e, data) => {
  e.dataTransfer.setData("dataName", JSON.stringify(data));
})
```
### [`dataTransfer.getData()`](https://developer.mozilla.org/en-US/docs/Web/API/DataTransfer/getData)

> **僅回傳字串。**

#### 語法：
data 為字串：
```jsx=
const onDrag = ((e) => {
  const data = e.dataTransfer.getData("dataName");
})
```
data 為其他：(用解析JSON字串方式取得資料)
```jsx=
const onDrop = ((e) => {
  const data = JSON.parse(e.dataTransfer.getData("dataName"));
})
```


## API
### onDrop
> An item is dropped on a valid drop target.
>> item 被放在 drop 區塊。
### onDragStart
> The user starts dragging an item.
>> 開始拖移 item 。
### onDragOver
> A dragged item is being dragged over a valid drop target.
>> 拖移 item 正在 drop 區塊內被拖移。

---
### onDrag
> A dragged item is dragged.
>> 拖移 item 正在被拖移。
### onDragend
> A drag operation ends (such as releasing a mouse button or hitting the Esc key; see Finishing a Drag.)
>> 拖移狀態結束（例如：放開滑鼠、按 Esc 鍵盤按鈕）。
### onDragenter	
> A dragged item enters a valid drop target. (See Specifying Drop Targets.)
>> 拖移 item 進入到 drop 區塊。
### onDragleave	
> A dragged item leaves a valid drop target.
>> 拖移 item 離開 drop 區塊。

## 參考資料
> 參考影片：[Drag and drop in react was a lot easier than I thought](https://www.youtube.com/watch?v=u65Y-vqYNAk)
> 參考文件：
> - W3Schools： [HTML Drag and Drop API](https://www.w3schools.com/html/html5_draganddrop.asp)
> - MDN： [HTML Drag_and Drop API](https://developer.mozilla.org/en-US/docs/Web/API/HTML_Drag_and_Drop_API)
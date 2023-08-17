import React from 'react'

export default function PlanModal() {
  return (
    <div className={modal.modal}>
      <div className={modalContent.modalContent}>
          <h3 align={modal.header}>새 계획 만들기</h3>
          <div className={modal.side1}>
            <h4>여행이름 <input type="text" /></h4>
          </div>  
          <div className={modal.side2}>
            <h4>출발일자 <input type="date" name="" id="" /></h4>
          </div>
          <div className={modal.side3}>
            <h4>여행인원 <input type="number" name="" id="" /> 명</h4>
          </div>  
          <div className={modal.side4}>
            <h4>설명 <input type="text" /></h4>
          </div>
            <br/>
          <div className={modal.button}>
            <button onClick={''}> 계획 만들기</button>
            <button id="close-modal" onClick={''}> 창닫기</button>
          </div>  
      </div>
    </div>
  );
};

import React, { Component } from 'react';

class TOC extends Component {
    // 성능을 위해서 사용, 
    // 자기와 상관없는 일이 진행될 때는 밑의 render 함수를 계속 호출하지 않도록 함 
    // (목록이 변했을 때만 render 함수가 호출되도록)
    shouldComponentUpdate(newProps, newState) {  // 새롭게 바뀐 값(newProps.data)과 이전의 값(this.props.data) 접근 가능
    // true일 경우 render 호출, false일 경우 render 호출x
      if(this.props.data === newProps.data) {
        return false;
      }
      return true;
    }
    render() {
      var lists = [];
      var data = this.props.data;
      var i = 0;
      while(i < data.length) { // 여러 개의 목록을 자동으로 생성하기 위해서는 key를 사용
          lists.push(
          <li key={data[i].id}>
            <a href={"/content/"+data[i].id}
            data-id={data[i].id}
            onClick={function(e) {
              e.preventDefault();
              this.props.onChangePage(e.target.dataset.id); // e.target은 <a> 태그를 가리킴 -> 즉 a 태그 속 data-id인 data[i].id 값을 가져와서 사용할 수 있어짐 -> 이를 App.js에서 id값으로 받아서 사용 (속성 이용 방식)
            }.bind(this)}
            /* 또는 이렇게도 가능 : bind는 두번째 인자로 들어온 것을 함수의 첫번째 매개변수로 넣어주고 기존에 있는 것은 뒤로 한 칸씩 밀리게 됨 
            예) bind(this) -> (e) / bind(this, data[i].id) -> (id, e) / bind(this, data[i].id, 10) -> (id, num, e) 
            <a href={"/content/"+data[i].id}
            onClick={function(id, e) {
              e.preventDefault();
              this.props.onChangePage(e.target.dataset.id);
            }.bind(this, data[i].id)}
            */
            >{data[i].title}</a>
          </li>);
          i = i + 1;
      }
      return (
        <nav>
          <ul>
            {lists}
          </ul>
        </nav>
      );
    }
  }

  export default TOC;

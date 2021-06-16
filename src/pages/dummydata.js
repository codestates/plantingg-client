import imga from '../components/image/내식물.png'
import imgb from '../components/image/내식물2.png'
import imgc from '../components/image/내식물3.png'
import imgd from '../components/image/내식물4.png'
import imge from '../components/image/내식물5.png'

const postList = [
      {
        "id": 1,
        "image": imga,
        "content": "첫번째 게시글 내용입니다.",
        "createDate": "2020-10-25",
        "tag": '#잘크고있다내식물'
      },
      {
        "id": 2,
        "image": imgb,
        "content": "두번째 게시글 내용입니다.",
        "createDate": "2020-10-25",
        "tag": '#5959'
      },
      {
        "id": 3,
        "image": imgc,
        "content": "세번째 게시글 내용입니다.",
        "createDate": "2020-10-25",
        "tag": '#오늘 날씨는 좋음'
      },
      {
        "id": 4,
        "image": imgd,
        "content": "네번째 게시글 내용입니다.",
        "createDate": "2020-10-25",
        "tag": '#둥기둥기내새끼'
      },
      {
        "id": 5,
        "image": imge,
        "content": "다섯번째 게시글 내용입니다.",
        "createDate": "2020-10-25",
        "tag": '#짜란다짜란다'
      },
    ];
    
    const getPostByNo = no => {
      const array = postList.filter(x => x.no == no);
      if (array.length === 1) {
        return array[0];
      }
      return null;
    }
    
    export {
      postList,
      getPostByNo
    };
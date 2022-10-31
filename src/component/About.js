import hoonPic from '../images/hoon.png';

export default function About() {
  return (
    <div className="about-bg text-center" id="about">
      <div className="spacer">
        <div className="container">
          <div className="row justify-content-md-center">
            <div className="col-lg-8">
              <div className="about-text text-start">
                <h3>
                  Bio
                </h3>
                <p className="lead d-none">
                  HTML5, CSS3, Javascript 및 Jquery와 Media query를 활용한 반응형 웹사이트 구축 프로젝트에 다수 참여 하였으며 
                  최근에는 Block Chain Marketing(ICO) 웹사이트 운영, 암호화폐 거래소 운영/모바일 버전 신규 구축 프로젝트에 참여 하였으며 
                  그 전에는 삼성전자, LG Display 인트라넷 포털사이트 구축 프로젝트를 경험 하였습니다.
                </p>
                <p className="lead">
                  영화와 음악, 커피를 좋아하고 장거리 달리기, 마라톤이 취미 이며 미래, 기술, 자동차, 디자인과 미디어에 관심이 많아서 이런것들에 관련된 매체를 즐겨 봅니다.<br />
                  저는 술과 담배는 하지 않고 여가 시간에는 주로 운동을 하거나 인터넷 강의를 듣고 때때로 드라이브를 합니다. <br />
                  좋아하는 작가는 <a href="https://ko.wikipedia.org/wiki/%EC%9E%AC%EB%9F%AC%EB%93%9C_%EB%8B%A4%EC%9D%B4%EC%95%84%EB%AA%AC%EB%93%9C" target="_blank" rel="noopener noreferrer">제래드 다이아몬드</a>,  
                  <a href="https://ko.wikipedia.org/wiki/%EB%B2%A0%EB%A5%B4%EB%82%98%EB%A5%B4_%EB%B2%A0%EB%A5%B4%EB%B2%A0%EB%A5%B4" target="_blank" rel="noopener noreferrer">베르나르 베르베르</a> 인데, 
                  어린시절 읽은 베르나르 베르베르의 [개미]는 광대 하면서도 작은 또다른 세상을 살고있는 이웃이 있다는것에 깊은 감명을 받았고,
                  청년기에 읽은 제래드 다이아몬드의 [총, 균, 쇠]는 인류 문명의 흥망성쇠를 좀 더 넓은 시각으로 바라볼 수 있게 되어 기억에 남는 책 입니다.
                </p>
                <p className="lead">
                  술자리를 좋아하지 않고 약간은 고지식 한 편이라서 가까워지기 쉽지 않은 성격이라고 종종 듣긴 하였으나
                  알고보면 굉장히 밝고 붙임성 있는 성격 덕분에 누구와도 원만하게 잘 지내는 편입니다. 
                </p>
                <h3>개발환경</h3>
                <p>
                  <span className="badge text-bg-primary">#osx</span>&nbsp;
                  <span className="badge text-bg-primary">#git</span>&nbsp;
                  <span className="badge text-bg-primary">#npm</span>&nbsp;
                  <span className="badge text-bg-primary">#webpack</span>&nbsp;
                  <span className="badge text-bg-secondary">#aws</span>&nbsp;
                  <span className="badge text-bg-secondary">#ec2</span>&nbsp;
                  <span className="badge text-bg-secondary">#linux</span>&nbsp;
                  <span className="badge text-bg-secondary">#php</span>&nbsp;
                  <span className="badge text-bg-secondary">#mysql</span>&nbsp; 
                </p>        
              </div>
            </div>
            <div className="col-lg-3">
              <img src={hoonPic} className="img-fluid" alt="hoon from DMZ" />
            </div>
          </div>   
        </div>
      </div>
    </div>
  );
}
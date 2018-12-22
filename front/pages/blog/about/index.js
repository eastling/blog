import React from 'react';
import BlogLayout from '~/components/blog-layout'
import axios from '~/lib/axios'
import Link from 'next/link'



const About = ({ result }) => {
  return (
    <BlogLayout>
      <div>
        <div id="main" role="main">
          <article class="page" itemScope="" itemType="http://schema.org/CreativeWork" >
            <div class="page__inner-wrap">
              <header>
                <h1 class="page__title" itemProp="headline">Contact</h1>
              </header>
              <section class="page__content" itemProp="text">
                <h2 id="简版简介">简版简介</h2>

                <p>阳志平，安人心智集团董事长，心智工具箱公众号作者，致力于认知科学的产品开发、科学研究及传播。</p>

                <h2 id="长版简介">长版简介</h2>

                <p>阳志平，认知科学专家，现任安人心智集团董事长。2003年创办安人公司，2014年创办中国领先的认知科学公司<a href="http://www.anrenmind.com">安人心智集团</a>。安人心智以测量与增强人类认知能力为使命，推动认知科学在商业领域的实践，业务包括认知科学的产品研发、教育培训与科学传播。旗下子公司包括<a href="http://ibrainbaby.com/">爱贝睿</a>（基于脑科学与人工智能的新一代儿童教育机构）和<a href="http://www.openmindclub.com/">开智公司</a>（以认知科学为基础的职业教育机构）等，已孵化<a href="http://www.aiyinfa.com/">爱银发</a>、<a href="http://attention.ibrainbaby.com">小海马</a>、<a href="http://www.aiwriter.cn/">写匠</a>等项目。在创办安人公司之前，阳志平曾在清华大学与企业合作委员会、和君、华夏基石担任战略与人力资源高级咨询师。</p>

                <h2 id="认知科学产品的研发">认知科学产品的研发</h2>

                <p>阳志平精通认知科学评估暨训练体系设计。先后主持开发多款软件：<a href="http://www.ibrainbaby.com/app">未来脑计划App</a>（基于脑科学的科学早教体系）与<a href="http://a.ibrainbaby.com">注意力指数App</a>（注意力评估系统）；<a href="http://www.openmindclub.com/">开智学堂</a>（智能卡片教学系统）与<a href="http://www.aiwriter.cn/">写匠</a>（中文写作辅助系统）；<a href="http://aiyinfa.com/haima">海马指数</a>（老年人认知能力评估检测工具）与<a href="http://aiyinfa.com/ruizhi">瑞智庄园</a>（老年人认知能力训练平台），分别涵盖儿童认知发展、成人认知训练与老年人认知健康三大领域。</p>

                <p>在职业生涯早期，阳志平曾从事人才测评、教育心理测量工作，云南省马加爵事件发生后，负责数十万位大学生的心理健康测量，被新浪新闻中心头条报道；与北京市教委合作，研发北京市教师能力测评系统，连续六年用于北京市教师选拔；与北京市司法局、北京市消防局、二炮等合作，研发犯人心理矫正系统、消防官兵心理健康系统、军人心理服务系统；开发自主知识产权的心理测验数十套。</p>

                <h2 id="认知科学的课程设计">认知科学的课程设计</h2>

                <p>阳志平亦精通教育课程体系设计，尤其擅长运用认知科学指导教育实践。近些年先后主持研发儿童发展领域的大型课程体系——<a href="https://baike.baidu.com/item/未来脑计划">未来脑计划</a>；<a href="https://mp.weixin.qq.com/s/l72EPohJPOG9Dkv4PswzSA">成人多元认知思维训练体系</a>——认知写作学、信息分析、论证分析、行为分析与决策分析等多门课程。其中首创的认知写作学，探索人类心智之奇与文学之美，自成一家，先后授课六期，学员逾千。
在职业生涯早期，阳志平曾研发中小学生积极心理学课程体系，被全国数十个省市用于中小学课程培训，主编的《<a href="https://book.douban.com/subject/26762234/">积极心理学团体活动课操作指南</a>》一书重印数十次，成为全国中小学心理教师与班主任工作必读读物之一。2001年参编中国教育学会前会长顾明远教授主编的《国际教育新理念》一书，负责其中心理学对教育影响部分，撰写四章。</p>

                <h2 id="认知科学的科学传播">认知科学的科学传播</h2>

                <p>阳志平促进认知科学在中国的科学传播。先后引进数十本认知科学经典好书到中国，如斯坦诺维奇教授的系列著作《<a href="https://book.douban.com/subject/26412113/">机器人叛乱</a>》、《<a href="https://book.douban.com/subject/26605978/">超越智商</a>》、《<a href="https://book.douban.com/subject/26728916/">决策与理性</a>》、《理商》（待出版）；平克教授的《<a href="https://book.douban.com/subject/30186025/">风格感觉</a>》；特纳教授的《<a href="https://book.douban.com/subject/6735604/">古典风格</a>》（待出版）；艾利克森教授的《<a href="https://book.douban.com/subject/26895993/">刻意练习</a>》及《<a href="https://book.douban.com/subject/27111588/">智力是什么</a>》、《<a href="https://book.douban.com/subject/26296233/">重塑大脑，重塑人生</a>》、《日常生活的神经科学》、《上脑下脑》等书。</p>

                <p>阳志平通过旗下公司爱贝睿的<a href="https://book.douban.com/series/41800">爱贝睿文库</a>，先后组织出版儿童认知发展原创图书《给孩子的未来脑计划》、《天才赢在注意力》、《聪明养育》、《自主教养》、《养育的选择》等书；通过旗下开智公司的<a href="https://book.douban.com/series/29022">开智文库</a>，先后组织出版原创图书《认知风暴》（待出版）、《追时间的人》、《生于一九八四》、《爱人、情人和怪人》、《Gephi 中文教程》等书。其中，《<a href="https://book.douban.com/subject/26850526/">追时间的人</a>》（阳志平主编）、《生于一九八四》（郝景芳著）获豆瓣2016年好书奖；《给孩子的未来脑计划》（魏坤琳著）、《养育的选择》（陈忻著），多次荣登畅销书榜。</p>

                <p>阳志平发起认知科学爱好者交流会<a href="https://m.openmindclub.com">开智大会</a>连续三届。先后邀请众多知名专家进行演讲，包括但不限于魏坤琳、安替、李雪凇等等。历届大会主题分别是：爱与智慧；美与好奇；创造与热情。</p>

                <h2 id="读书与写作">读书与写作</h2>

                <p>业余时间，阳志平热爱写作，博客写作近二十年，文章广为传播。自2015年起，在《财新周刊》上开设认知科学<a href="http://weekly.caixin.com/xz/">专栏</a>，迄今连载文章近百篇；自2018年起，即将由中信、三联等出版社出版系列专著，包括但不限于《认知三部曲》、《文心三部曲》与《大宗师三部曲》等书。</p>

                <p>阳志平主编《认知风暴》（待出版）、《<a href="https://book.douban.com/subject/26850526/">追时间的人</a>》、《<a href="https://book.douban.com/subject/26762234/">积极心理学团体活动课操作指南</a>》与《<a href="https://book.douban.com/subject/3100422/">灾后心理自助手册</a>》等书；翻译《<a href="https://book.douban.com/subject/1496832/">工作评价</a>》等书；审校《<a href="https://book.douban.com/subject/6735604/">古典风格</a>》（待出版）、《<a href="https://book.douban.com/subject/30186025/">风格感觉</a>》、《<a href="https://book.douban.com/subject/26605978/">超越智商</a>》、《积极情绪的力量》、《社会网络分析》等书。在职业生涯早期，曾发表科学论文、诗歌数十篇。曾荣获首都首届挑战杯科研竞赛特等奖；多项诗歌竞赛特等奖。</p>

                <p>阳志平也是一位藏书数万的书虫。关于藏书整理技法、读书技法的系列文章广为流传。过去十余年，阳志平将自己的部分藏书书目信息以<a href="https://www.douban.com/people/ouyangzhiping/doulists/all">豆瓣豆列</a>、Github 开源仓库、Zotero 群组形式开放给读者。阳志平亦从藏书库中精心挑选好书，编撰为《<a href="https://www.douban.com/doulist/41691053/">开智正典</a>》，以普及那些人类智者创建的一流思维模型。</p>

                <h2 id="联系作者">联系作者</h2>

                <ul>
                  <li>Email：<a href="mailto:im@yangzhiping.com">im@yangzhiping.com</a></li>
                  <li>个人网站：<a href="https://www.yangzhiping.com">https://www.yangzhiping.com</a></li>
                  <li>公司网站：<a href="http://www.anrenmind.com">http://www.anrenmind.com</a></li>
                  <li>微信公众号：心智工具箱</li>
                  <li>豆瓣：参见<a href="https://www.douban.com/people/ouyangzhiping/doulists/all">豆瓣豆列</a></li>
                </ul>

                <h2 id="changelog">Changelog</h2>

                <ul>
                  <li>20180928：阳志平更新</li>
                  <li>20160515：阳志平创建</li>
                </ul>
              </section>
            </div>
          </article>
        </div>
        <div class="page__footer">
          <footer>
            <div class="page__footer-follow">
              <ul class="social-icons">
                <li><strong>关注:</strong></li>
                <li><a href="http://github.com/ouyangzhiping"><i class="fa fa-fw fa-github" aria-hidden="true"></i> GitHub</a></li>
                <li><a href="https://www.yangzhiping.com/feed.xml"><i class="fa fa-fw fa-rss-square" aria-hidden="true"></i> Feed</a></li>
              </ul>
            </div>
            <div class="page__footer-copyright">© 2018 阳志平. 技术来自于 <a href="http://jekyllrb.com" rel="nofollow">Jekyll</a> &amp; <a href="https://mademistakes.com/work/minimal-mistakes-jekyll-theme/" rel="nofollow">Minimal Mistakes</a>.</div>
          </footer>
        </div>
      </div>
    </BlogLayout >
  )
}

About.getInitialProps = async () => {
  const res = await axios({
    url: 'article/list',
  })
  return { result: res.data.data.article_list }

}

export default About
/* eslint-disable no-unused-vars */
/* eslint-disable max-len */
import React from 'react';
import { Card } from 'react-bootstrap';
import { format, formatDistance } from 'date-fns';
import '../../../mdb.css';

const emergencyRateMapReverse = { 1: '不紧急', 2: '紧急', 3: '危急' };

const ArticleCard = ({ article, setShowDetailsModal, setArticleDetailsToShow }) => {
  if (!article) return null;

  const publishedDate = format(new Date(article.createdAt), 'PP');
  const remianDays = formatDistance(new Date(article.surviveDate), new Date(), { addSuffix: true });
  const initProfileImage = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png';
  const { profileImage } = article.user;

  const statusBtnStyleMap = { 待解决: 'article-card-btn-status-1', 已解决: 'article-card-btn-status-2' };
  const statusBtnStyle = statusBtnStyleMap[article.status];

  const emergencyRateBtnStyleMap = {
    危急: 'article-card-btn-emergencyrate-1',
    紧急: 'article-card-btn-emergencyrate-2',
    不紧急: 'article-card-btn-emergencyrate-3',
  };
  const emergencyRate = emergencyRateMapReverse[article.emergencyRate];
  const emergencyRateBtnStyle = emergencyRateBtnStyleMap[emergencyRate];

  const handleClickShowModal = () => {
    setShowDetailsModal(true);
    setArticleDetailsToShow(article);
  };

  return (
    <div className="grid-item">
      <div className="p-3 article-card">
        <Card key={article.id}>
          <Card.Title>
            <div className="article-card">
              <a href={`/article/${article.id}`}>
                <div className="article-card-title">
                  {article.title}
                </div>
              </a>
            </div>
            <div className="container-row-primary">
              <div className="article-card-summary">
                分类：
                {article.type}
              </div>
            </div>
            <div className="container-row-primary">
              <div className={statusBtnStyle}>
                {article.status}
              </div>
              <div className={emergencyRateBtnStyle}>
                {emergencyRate}
              </div>
            </div>
            <div className="container-row-primary">
              <a href={`/@${article.user.username}`}>
                <div className="">
                  <img src={profileImage || initProfileImage} alt="user avatar" className="article-card-author article-card-author-avatar" />
                </div>
              </a>
              <a href={`/@${article.user.username}`}>
                <div className="article-card-author-name">{`${article.user.firstName} ${article.user.lastName || ''}`}</div>
              </a>
              <div className="article-card-date">{publishedDate}</div>
            </div>
            <div>
              <div className="container-row-primary">
                <div className="article-card-summary">
                  {article.address2}
                </div>
              </div>
              <div className="container-row-primary">
                <div className="article-card-summary">
                  可以提供：
                  {article.provide}
                </div>
              </div>
              <div className="container-row-primary">
                <div className="article-card-summary">
                  需要：
                  {article.need}
                </div>
              </div>
              <div className="container-row-primary">
                <div className="article-card-summary">
                  生存指数：
                  {article.surviveDate}
                  (
                  {remianDays}
                  )
                </div>
              </div>
              <div className="container-row-primary">
                <div className="article-card-date">
                  <button
                    type="button"
                    className="article-card-btn-bookmark article-card-btn-item article-card-date"
                    onClick={() => handleClickShowModal()}
                  >
                    <div className="">
                      查看详情
                    </div>
                  </button>
                </div>
              </div>
            </div>
            <div className="container-article-card-bookmark">
              <div className="article-card-summary">
                标签：
                {article.tag || '无'}
              </div>
            </div>
          </Card.Title>
        </Card>
      </div>
    </div>
  );
};

export default ArticleCard;

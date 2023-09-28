import styles from './Posts.module.scss';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useSelector } from 'react-redux';
import { getAllposts } from '../../../redux/store'
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import DateToString from '../../../utils/DateToString/DateToString.js';




const Posts = () => {
    
 const posts = useSelector(getAllposts);

  

  return (
    <Container className='mb-4'>
      <Row>
      {posts.map(post => (
        <Col key={post.id} xs={12} md={3} className={styles.wrapper}>
          <h3 className='pt-2'>{post.title}</h3>
          <p><span className={styles.caption}>Author:</span>{post.author}</p>
          <p><span className={styles.caption}>Published:</span>{DateToString(post.publishedDate)}</p>
          <p><span className={styles.caption}>Category:</span>{post.category}</p>
          <p>{post.shortDescription}</p>
          <Link key={post.id} to={'/post/' + post.id}><Button className='mb-3' variant="primary">Read More</Button></Link>
          </Col>
      ))}
      </Row>
    </Container>
  );
};

export default Posts;

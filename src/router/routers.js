const router = require("express").Router()
const postController = require("../controllers/postControllers")
const userController = require("../controllers/userController")

// posting 
router.post("/posts", postController.createPost)               // 게시물 등록
router.get("/posts", postController.fetchList)                 // 게시물 전체 보여주기
router.get("/posts/:post_id", postController.readPost)         // 게시물 하나 읽기
router.put("/posts/:post_id", postController.updatePost)       // 게시물 하나 업데이트 하기
router.delete("/posts/:post_id", postController.deletePost)    // 게시물 하나 지우기

// like
router.put('/posts/:post_id/like')                     // 특정 게시물 좋아요 상태 변경

// comment
router.get('/posts/:post_id/comments')                  // 특정 게시물 전체 댓글 조회
router.post('/posts/:post_id/comments')                 // 특정 게시물 댓글 생성
router.patch('/posts/:post_id/comments/:comment_id')    // 특정 게시물 댓글 수정
router.delete('/posts/:post_id/comments/:comment_id')   // 특정 게시물 댓글 삭제

// Register, Login 
router.post("/users/signup", userController.userRegister)    // 사용자 회원가입
router.post("/users/signin", userController.userLogin)    // 사용자 로그인
router.get("/users/auth")       // 인증처리 미들웨어

module.exports = router

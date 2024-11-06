const database = require("../database/database"); // database 모듈 임포트

exports.getTasks = async (request, response) => {
  const userId = request.params.userId; // 요청 URL에서 userId 파라미터 추출

  try {
    const result = await database.pool.query(
      "SELECT * FROM tasks WHERE userId =$1 ORDER BY created_at DESC",
      [userId]
    );

    return response.status(200).json(result.rows);
  } catch (error) {
    // 오류가 발생하여 응답에 실패했을 때 500 상태 코드와 error 매시지를 응답 결과로 전송
    return request.status(500).json({ msg: "Get Tasks Fail: " + error });
  }
};

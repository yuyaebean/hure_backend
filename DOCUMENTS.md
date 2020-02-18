# HURE_backend

Hanyang Univ. Graduate School of Real Estate Convergence Reunion app backend  
한양대학교 부동산융합대학원 원우회 앱 backend

## RESTful API

| Method | Address     | Description                             |
| ------ | ----------- | --------------------------------------- |
| GET    | /           | GraphQL Playground                      |
| POST   | /           | GraphQL Server                          |
| POST   | /api/upload | File upload to S3 and returns file link |

## GraphQL Resolvers

### Queries

- isAdmin: Boolean
- signIn(username, passwd): Token
- seeAllGradYear: GradYear[]
- seeMajorList: Major[]
- seeAllNotice: Notice[]
- seeLatestNotice: Notice
- seeAllProf: Prof[]
- searchUser(query): User[]
- seeAllUser: User[]

### Mutations

- createGradYear(...): GradYear
- createMajor(...): Major
- createNotice(...): Notice
- createProf(...): Prof
- deleteProf(...): Prof
- editProf(...): Prof
- confirmRequest(...): Boolean
- confirmSecret(...): Token
- createUser(...): User
- deleteUser(...): User
- editMe(...): User
- editUser(...): User
- requestCreateUser(...): User
- requestSecret(...): Boolean

_Detail descriptions are described in GraphQL Playground._
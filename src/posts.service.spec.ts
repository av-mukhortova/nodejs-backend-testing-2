import { PostsService } from './posts.service';

describe('PostsService', () => {
  let postsService: PostsService;

  beforeEach(() => {
    postsService = new PostsService();
  });

  describe('.findMany', () => {
    const posts = [
      {text: 'Post 1'},
      {text: 'Post 2'},
      {text: 'Post 3'},
      {text: 'Post 4'},
    ];
    const skip = 1;
    const limit = 2;

    beforeEach(() => {
      posts.forEach((post) => postsService.create(post));
    });

    it('should return all posts if called without options', () => {
      // реализуйте тест-кейс
      expect(postsService.findMany().length).toEqual(posts.length);
    });

    it('should return correct posts for skip and limit options', () => {
      // реализуйте тест-кейс
      const res = postsService.findMany({ skip, limit}).map((item) => item.text);
      const expectedRes = posts.slice(skip,limit + 1).map((item) => item.text);
      expect(res).toEqual(expectedRes);
    });

    // реализуйте недостающие тест-кейсы
    it('should return correct posts for skip option only', () => {
      // реализуйте тест-кейс
      const res = postsService.findMany({ skip}).map((item) => item.text);
      const expectedRes = posts.slice(skip).map((item) => item.text);
      expect(res).toEqual(expectedRes);
    });

    it('should return correct posts for limit option only', () => {
      // реализуйте тест-кейс
      const res = postsService.findMany({ limit}).map((item) => item.text);
      const expectedRes = posts.slice(0, limit).map((item) => item.text);
      expect(res).toEqual(expectedRes);
    });
  });
});
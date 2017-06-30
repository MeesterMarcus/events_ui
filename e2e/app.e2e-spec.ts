import { EventsUiPage } from './app.po';

describe('events-ui App', () => {
  let page: EventsUiPage;

  beforeEach(() => {
    page = new EventsUiPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});

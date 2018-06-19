import { events, touchable } from '@runroom/purejs';
import accordion from './components/m-accordion';

touchable();

events.onDocumentReady(() => {
  accordion();
});

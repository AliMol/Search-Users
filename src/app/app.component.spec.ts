import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { DataTableComponent } from './DataTable/datatable.component';
import { TableData } from './MOCK_DATA';

describe('AppComponent', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        DataTableComponent
      ],
      imports: [
        BrowserModule,
        FormsModule,
      ],
      providers: [ ]
    });
    TestBed.compileComponents();
  });
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
  it(`should have as title 'User Search app'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('User Search app');
  }));
  it('should render title in a h1 tag', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to User Search app!');
  }));
  it('Test Fetch First Page', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    fixture.detectChanges();

    var objItem= [{"user_name":"Thorsten Say","email":"tsay0@woothemes.com","gender":"Male","ip":"175.40.208.98"},
      {"user_name":"Zacharias Edser","email":"zedser1@spotify.com","gender":"Male","ip":"134.35.71.240"},
      {"user_name":"Lorry Swane","email":"lswane2@webmd.com","gender":"Male","ip":"70.74.21.161"},
      {"user_name":"Adelice Copestick","email":"acopestick3@google.ru","gender":"Female","ip":"28.205.198.101"},
      {"user_name":"Binnie Veillard","email":"bveillard4@ihg.com","gender":"Female","ip":"89.91.174.63"},
      {"user_name":"Derk Massow","email":"dmassow5@blogtalkradio.com","gender":"Male","ip":"204.237.210.235"},
      {"user_name":"Florette Solan","email":"fsolan6@disqus.com","gender":"Female","ip":"186.217.87.142"},
      {"user_name":"Kelli Pudding","email":"kpudding7@nps.gov","gender":"Female","ip":"165.235.195.72"},
      {"user_name":"Rafael O' Finan","email":"rofinan8@ucsd.edu","gender":"Male","ip":"173.27.77.108"},
      {"user_name":"Lynnet Castanaga","email":"lcastanaga9@biblegateway.com","gender":"Female","ip":"139.213.153.87"}];

    expect(app.changePage(app.firstPage)).toEqual(objItem);
  }));

  it('Test Fetch First Page', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    fixture.detectChanges();

    var objItem= [{"user_name":"Thorsten Say","email":"tsay0@woothemes.com","gender":"Male","ip":"175.40.208.98"},
      {"user_name":"Zacharias Edser","email":"zedser1@spotify.com","gender":"Male","ip":"134.35.71.240"},
      {"user_name":"Lorry Swane","email":"lswane2@webmd.com","gender":"Male","ip":"70.74.21.161"},
      {"user_name":"Adelice Copestick","email":"acopestick3@google.ru","gender":"Female","ip":"28.205.198.101"},
      {"user_name":"Binnie Veillard","email":"bveillard4@ihg.com","gender":"Female","ip":"89.91.174.63"},
      {"user_name":"Derk Massow","email":"dmassow5@blogtalkradio.com","gender":"Male","ip":"204.237.210.235"},
      {"user_name":"Florette Solan","email":"fsolan6@disqus.com","gender":"Female","ip":"186.217.87.142"},
      {"user_name":"Kelli Pudding","email":"kpudding7@nps.gov","gender":"Female","ip":"165.235.195.72"},
      {"user_name":"Rafael O' Finan","email":"rofinan8@ucsd.edu","gender":"Male","ip":"173.27.77.108"},
      {"user_name":"Lynnet Castanaga","email":"lcastanaga9@biblegateway.com","gender":"Female","ip":"139.213.153.87"}];

    expect(app.changePage(app.firstPage)).toEqual(objItem);
  }));
  
  it('Test Fetch Last Page', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    fixture.detectChanges();

    var objItem= [{"user_name":"Wendie Barks","email":"wbarksri@eepurl.com","gender":"Female","ip":"40.179.237.160"},
      {"user_name":"Ambrose Cosslett","email":"acosslettrj@marketwatch.com","gender":"Male","ip":"160.78.186.218"},
      {"user_name":"Linnet Malzard","email":"lmalzardrk@berkeley.edu","gender":"Female","ip":"156.17.247.92"},
      {"user_name":"Barney Kissell","email":"bkissellrl@wikispaces.com","gender":"Male","ip":"115.76.222.236"},
      {"user_name":"Ivor O'Roan","email":"ioroanrm@businessinsider.com","gender":"Male","ip":"183.219.88.40"},
      {"user_name":"Derrick Assaf","email":"dassafrn@businessinsider.com","gender":"Male","ip":"213.67.78.251"},
      {"user_name":"Lee Chattaway","email":"lchattawayro@smh.com.au","gender":"Female","ip":"168.77.117.19"},
      {"user_name":"Ebeneser Skoughman","email":"eskoughmanrp@last.fm","gender":"Male","ip":"91.122.26.95"},
      {"user_name":"Laryssa Jordanson","email":"ljordansonrq@about.com","gender":"Female","ip":"16.37.136.139"},
      {"user_name":"Tierney Hudspith","email":"thudspithrr@dropbox.com","gender":"Female","ip":"252.151.103.207"}];

    expect(app.changePage((TableData.length / app.itemsPerPage))).toEqual(objItem);
  }));

  it('Test search \'nnic\'', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    const username = 'nnic';
    fixture.detectChanges();

    var objItem= [{"user_name":"Annice Egre","email":"aegre16@un.org","gender":"Female","ip":"40.96.169.6"},
      {"user_name":"Arie Dunnico","email":"adunniconr@huffingtonpost.com","gender":"Male","ip":"99.213.217.239"}];

    app.searchUser(username);

    expect(app.changePage(app.firstPage)).toEqual(objItem);
  }));

  it('Test search \'rod\'', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    const username = 'rod';
    fixture.detectChanges();

    var objItem= [{"user_name":"Rodge De Bernardi","email":"rdebernardi12@de.vu","gender":"Male","ip":"139.34.199.173"},
                  {"user_name":"Salomone Roddy","email":"sroddy3k@uiuc.edu","gender":"Male","ip":"32.162.113.84"}];

    app.searchUser(username);

    expect(app.changePage(app.firstPage)).toEqual(objItem);
  }));

  it('Test search not equal \'rod\'', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    const username = 'nnic';
    fixture.detectChanges();

    var objItem= [{"user_name":"Annice Egre","email":"aegre16@un.org","gender":"Female","ip":"40.96.169.6"},
      {"user_name":"Arie Dunn","email":"adunniconr@huffingtonpost.com","gender":"Male","ip":"99.213.217.239"}];

    app.searchUser(username);

    expect(app.changePage(app.firstPage)).not.toEqual(objItem);
  }));


});

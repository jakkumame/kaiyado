import { AuthService } from './../../service/auth/auth.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ReserveService } from 'src/app/service/reserve/reserve.service';



@Component({
  selector: 'app-usual-edit',
  templateUrl: './usual-edit.page.html',
  styleUrls: ['./usual-edit.page.scss'],
})
export class UsualEditPage {
  form: FormGroup;
  title: string;
  checkInDates: Date[] = [];
  checkOutDates: Date[] = [];

  constructor(
    private formBuilder: FormBuilder,
    private reserveService: ReserveService,
    private authService: AuthService,
    ) {
    this.form = this.formBuilder.group({
      宿泊人数: ['',  ],
      利用人数: ['',  ],
      朝食24日: ['',  ],
      昼食24日: ['',  ],
      夕食24日: ['',  ],
      宿泊人数24日: ['',  ],
      朝食25日: ['',  ],
      昼食25日: ['',  ],
      夕食25日: ['',  ],
      宿泊人数25日: ['',  ],
      朝食26日: ['',  ],
      昼食26日: ['',  ],
      夕食26日: ['',  ],
      宿泊人数26日: ['',  ],
      チェックイン日: ['',  ],
      チェックイン時間: ['',  ],
      チェックアウト日: ['',  ],
      チェックアウト時間: ['',  ]
    });
    // チェックイン・アウト日の最小値と最大値を設定
    this.generateDates();
  }


  generateDates() {
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    const currentMonth = currentDate.getMonth();

    for (let i = 24; i <= 26; i++) {
      const date = new Date(currentYear, currentMonth, i);
      this.checkInDates.push(date);
      this.checkOutDates.push(date);
    }
  }

  saveData() {}

}

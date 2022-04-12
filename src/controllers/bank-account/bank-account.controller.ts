import { Controller, Get, Param } from '@nestjs/common';
import { BankAccount } from 'src/models/bank-account.model';
import { Repository } from 'typeorm';

@Controller('bank-accounts')
export class BankAccountController {
    constructor(
        @InjectRepository(BankAccount)
        private BankAccountRepo: Repository<BankAccount>,
    ) {}

    @Get()
    index() {
        return this.bankAccounRepo.find()
    }

    @Get(':bankAccountId')
    show(
        @Param('bankAccountId') BankAccountId: string
    ) {
        return this.BankAccountRepo.findOneByOrFail(BankAccountId);
    }
}
